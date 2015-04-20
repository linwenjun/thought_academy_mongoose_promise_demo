##mongoose promise 示例

###需求

1. users表包含name和role两个字段,每次运行，按以下步骤运行
2. 生成10个user对象，role随机（0~5），name随便
3. 保存这10个用户到users表
4. 输出此时总共有多少用户和相关的role
5. 找到users表中的第一个user
6. 删除所有role属性与此user相同的记录
7. 输出删除后，users表记录条数，以及相关的role
8. 若中间有任何错误，则控制台输出错误详情
9. 所有操作(包括出错)结束后，结束进程
