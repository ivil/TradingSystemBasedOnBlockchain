package router

import (
	middlewares "server/middleware"

	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()
	// 跨域
	r.Use(middlewares.Cors())

	// 用户模块路由
	userRouter(r)
	contractRouter(r)

	return r
}
