package main

import (
	_ "github.com/go-sql-driver/mysql"
	"server/dao/mysql"
	"server/router"
)

func main() {
	// 连接数据库
	mysql.InitMysql()

	// 程序退出时关闭数据库连接
	defer mysql.Close()

	// 注册路由
	r := router.SetupRouter()
	r.Run("localhost:9091")
}
