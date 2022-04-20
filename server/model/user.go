package model

import (
	"log"
	"server/dao/mysql"
)

// 定义接收注册数据的结构体
// 属性必须大写开头，否则报错
type SignUp struct {
	// binding:"required"修饰的字段，若接收为空值，则报错，是必须字段
	Username    string `form:"username" json:"username" uri:"username" xml:"username" binding:"required"`
	Password    string `json:"password" binding:"required"`
	PhoneNumber string `json:"phoneNumber"`
	Nickname    string `json:"nickname"`
	ID          string `json:"ID"`
	Email       string `json:"email"`
}

func CreateUser(signUp *SignUp) (err error) {
	statement, err := mysql.DB.Prepare("insert into user set username=?,password=?,phoneNumber=?,nickname=?,email=?")
	log.Println(signUp)
	if err != nil {
		log.Println("注册预编译SQL语句时出错！")
	}
	res, err := statement.Exec(signUp.Username, signUp.Password, signUp.PhoneNumber, signUp.Nickname, signUp.Email)
	if err != nil {
		log.Println("执行注册语句时出错！")
	} else {
		log.Println(res.LastInsertId())
	}
	return err
}
