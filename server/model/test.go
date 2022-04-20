package test

type Todo struct {
	ID int `json:"id"`
	Title string `json:"title"`
	Status bool `json:"status"`
}

/*
	Todo这个Model的增删改查操作都放在这里
 */
// CreateATodo 创建todo
func CreateATodo(todo *Todo) (err error){
	return
}