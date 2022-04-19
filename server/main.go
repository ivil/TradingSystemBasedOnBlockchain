package main

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"log"
)

func main() {
	db, err := sql.Open("mysql", "ivil:ivil.world@/ivil.world?charset=utf8")
	if err == nil {
		log.Println("数据库连接成功了！")
	} else {
		log.Println("数据库连接失败了！")
	}

	// 插入数据
	addData, err := db.Prepare("INSERT INTO userinfo SET username=?,department=?,created=?")
	if err != nil {
		log.Println("预编译出错了！")
	}

	res, err := addData.Exec("ivil", "ivil.world", "2022-4-19")
	if err != nil {
		log.Println("执行SQL语句出错了！")
	}

	id, err := res.LastInsertId()
	if err != nil {
		log.Println("查询出错了！")
	}
	log.Println("id=", id)

	// 更新数据
	updateData, err := db.Prepare("update userinfo SET username=? where uid = ?")
	if err != nil {
		log.Println("预编译出错了！")
	}
	res, err = updateData.Exec("xxl", 7)
	if err != nil {
		log.Println("更新数据出错了！")
	}
	affect, err := res.RowsAffected()
	if err != nil {
		log.Println("aaa")
	}
	fmt.Println(affect)

	// 查询数据
	rows, err := db.Query("select * from userinfo")
	if err != nil {
		log.Println("查询出错了！")
	}
	for rows.Next() {
		var (
			uid        int
			username   string
			department string
			created    string
		)
		err = rows.Scan(&uid, &username, &department, &created)
		if err != nil {
			log.Println("扫描出错了！")
		}
		fmt.Println(uid, username, department, created)
	}

	// 删除数据
	deleteData, err := db.Prepare("delete from userinfo where uid = ?")
	if err != nil {
		log.Println("预编译出错了！")
	}
	res, err = deleteData.Exec(7)
	if err != nil {
		log.Println("删除数据出错了！")
	}
	affect, _ = res.RowsAffected() //受影响的行数
	fmt.Println(affect)
}
