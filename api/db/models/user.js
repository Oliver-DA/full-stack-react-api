const { DataTypes, Model } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize) => {

    class User extends Model {}

    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                notEmpty: {
                    msg: "Please provide a value for firstName"
                },
                notNull: {
                    msg:"The value for firstName can not be null"
                }
            }
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false,


            validate: {
                notEmpty: {
                    msg: "Please provide a value for lastName"
                },
                notNull: {
                    msg: "The value for lastName can not be null"
                }
            }
        },

        emailAddress: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                isEmail: {
                    msg: "Please provide a valid email address"
                },
                notNull: {
                    msg: "The value for emailAddress can not be null"
                },
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                notEmpty: {
                    msg: "Please provide a value for password"
                },
                notNull: {
                    msg: "The value for password can not be null"
                }
            }
        },

        confirmedPassword: {
            type: DataTypes.VIRTUAL,
            allowNull: false,

            set(val) {

                if(bcrypt.compareSync(val,this.password)) {
                    const hashedPassword = bcrypt.hashSync(val, 10);
                    this.setDataValue('confirmedPassword', hashedPassword);
                }
            },

            validate: {
                notNull: {
                    msg: "Both passwords mush match"
                }
            }
        }

    },{ sequelize })

    User.associate = (models) => {

        User.hasMany(models.Course, {
            foreignKey: "userId"
        }) 
    }

    return User
}

