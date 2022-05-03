package mysql

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"log"
	"server/config"
)

var DB *sql.DB

func InitMysql() (err error) {
	DB, err = sql.Open("mysql", config.DbConfig)
	if err != nil {
		return
	}
	err = DB.Ping()
	if err != nil {
		log.Println("数据库连接失败了！")
		panic(err)
	} else {
		log.Println("数据库连接成功！")
	}
	return DB.Ping()
}

func Close() {
	DB.Close()
	log.Println("已关闭与数据库的连接！")
}
