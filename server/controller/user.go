package controller

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func SignUp(c *gin.Context) {
	// 校验数据

	// 写入数据库

	// 返回响应
	c.JSON(http.StatusOK, gin.H{
		"code": http.StatusOK,
		"msg":  "注册成功！",
		"data": gin.H{
			"test": "test",
		},
	})
}
