package router

import (
	"server/controller"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	r.GET("/test", controller.Test)

	return r
}
