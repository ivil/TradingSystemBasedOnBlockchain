package main

import (
	"server/dao/mysql"
	"server/router"

	_ "github.com/go-sql-driver/mysql"
)

// url->controller->logic->model
// 请求来了 -> 控制器 -> 业务逻辑 -> 模型层的增删改查

func main() {
	// 连接数据库
	mysql.InitMysql()

	// 程序退出时关闭数据库连接
	defer mysql.Close()

	// 注册路由
	r := router.SetupRouter()
	r.Run("localhost:9091")
}
