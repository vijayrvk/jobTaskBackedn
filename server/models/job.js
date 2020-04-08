
module.exports = function (sequelize, DataTypes) {
    const Job = sequelize.define('job', {
        // Model attributes are defined here
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        url: {
            type: DataTypes.TEXT
            // allowNull defaults to true
        },
        created_at: {
            type: DataTypes.DATE
            // allowNull defaults to true
        },
        company: {
            type: DataTypes.TEXT
            // allowNull defaults to true
        },
        company_url: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        location: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        title: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        description: {
            type: DataTypes.TEXT
            // allowNull defaults to true
        },
        how_to_apply: {
            type: DataTypes.TEXT
            // allowNull defaults to true
        },
        company_logo: {
            type: DataTypes.TEXT
            // allowNull defaults to true
        }
    });
    return Job;
}