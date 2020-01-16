# 授权与访问控制

如果用一句话区分 认证（Authentication）和授权（Authorization）：
- 认证是识别请求方是谁的过程
- 授权是知道了请求方是谁之后，判断其是否具备某些权限的过程

Authing 支持非常丰富的认证、授权手段：
- 认证手段有：传统密码、验证码登录、丰富的第三方登录（微信、小程序、微博、GitHub、支付宝、QQ 等，未来还会有更多），以及企业级的 LDAP、SAML、OIDC 等。
- 授权手段有：完整的 OAuth、OIDC 流程。

对于授权流程，访问控制（Access Control）策略是非常重要的一环，目前 Authing 一共支持（或即将支持）三种访问控制手段：
- 普通的用户角色（最终将会被废除）
- RBAC
- ABAC（未来即将支持）

本文主要介绍的是授权的访问控制部分，将简要介绍一下 RBAC 以及 Authing 在这方面的支持程度。

## 什么是 RBAC

基于角色的访问控制（Role-based access control，简称 RBAC），指的是通过用户的角色（Role）赋予其相关权限，这实现了细粒度的访问控制，并提供了一个相比直接授予单个用户权限，更简单、可控的管理方式。

当使用 RBAC 时，通过分析系统用户的实际情况，基于共同的职责和需求，将他们分配给不同的角色。然后可以授予每个用户一个或多个角色，每个角色具有一个或多个权限，这种 **用户-角色**、**角色-权限** 间的关系，让我们可以不用再单独管理单个用户，用户从具备的角色里面继承所需的权限，从而使得用户赋权这件事变得更加简单。

举一个公司内所有在职员工具备登录公司邮箱的权限的场景，如果应用 RBAC，就可以赋予所有在职员工 `employee` 角色，`employee` 角色具备 `email:login` 权限，如此所有员工就具备了登录公司邮箱的权限。如果有员工离职，只需要将其移出 `employee` 角色，而不需单独收回权限。

本质上，一个角色（Role）就是一组权限（Permission）的集合。使用角色添加、删除、调整权限，相比单独赋予单个用户权限更加简单。当你的用户基数不断增长时，角色会变得尤为有用。

在规划访问控制策略时，最佳实践是给予用户完成工作必须的最小权限。

### 分组

除了直接赋予用户某个角色，作为 RBAC 的最佳实践，我们还可以通过分组管理用户，将一个分组和一组角色绑定，在此分组内的所有用户就会继承这些角色，并自动具备了这些角色包含的权限。

这之间的关系为：Permission <-> Roles  <-> Groups <-> Users

如下图所示：
- 分组：Employee, Contractor
- 角色：Vacation Requester, Invoice Submitter, Express Submitter
- 权限：Read vacation requests, Create vacation requests 等

用分组管理用户、分组包含一组权限，这也是我们推荐使用的方式。

![](http://lcjim-img.oss-cn-beijing.aliyuncs.com/2020-01-15-082103.jpg)

> 注：如果一个用户具备的多个角色中权限有重叠，他最终的权限列表将会是这些角色权限的并集。

### 使用 RBAC 的优势

- 系统性、可重复性的权限指派
- 更方便得用户权限审计，快速定位问题
- 快速地添加、修改角色，甚至可以调用 API 实现
- 减少授予用户权限时发生错误的可能性
- 引入 第三方用户/新用户/未登录用户 时，赋予他们预先配置好的角色，比如 `guest`


# 权限访问控制 at Authing  

下面是 Authing 在权限访问控制、 RBAC 特性及其扩展的支持情况：

| Feature                                           |   备注   |  Authing 支持情况 |
| ------------------------------------------------- | :------: | ----------------: |
| 角色                                              |          |                   |
| 创建/修改/删除 角色                               |          | In future release |
| 分页查询                                          |          |               YES |
| 通过名称、描述搜索角色                            |          |               YES |
| 角色能被授予给分组                                |          |               YES |
| 角色嵌套、分层                                    |          | In future release |
| 角色通过 namespace、多租户管理                    |          | In future release |
| 查询角色具备的所有权限                            |          |               YES |
| 查询角色中包含的所有用户                          |          |               YES |
|                                                   |          |                   |
| 用户                                              |          |                   |
| 创建/修改/删除 用户                               |          |               YES |
| 分页查询                                          |          |               YES |
| 通过昵称、邮箱搜索用户                            |          |               YES |
| 查看最近注册、登录的用户                          |          |               YES |
| 通过第三方应用查找用户                            |          | In future release |
| 通过 lucence 语法搜索用户                         |          | In future release |
| 用户可以拥有一个或多个角色                        | 最多50个 |               YES |
| 用户能在一个或多个分组里                          | 最多50个 |               YES |
| 查看一个用户具备的所有角色                        |          |               YES |
| 查看一个用户所在的所有分组                        |          |               YES |
| 查看一个用户所具备的所有权限                      |          |               YES |
| **通过 JSON 导入/导出用户**                       |          |               YES |
| **自定义密码加密函数**                            |          |               YES |
|                                                   |          |                   |
| 权限                                              |          |                   |
| 创建/修改/删除 权限                               |          |               YES |
| 分页查询                                          |          |               YES |
| 通过名称、描述搜索权限                            |          | In future release |
| 能直接赋予用户权限                                |          |  To be determined |
| 能授权给一个或多个角色                            |          |               YES |
| 查询所有具有某个权限的用户                        |          | In future release |
| 查询所有具有某个权限的角色                        |          | In future release |
| 查询所有具有某个权限的分组                        |          | In future release |
|                                                   |          |                   |
| 分组                                              |          |                   |
| 分页查询                                          |          |               YES |
| 创建/修改/删除 分组                               |          |               YES |
| 通过名称、描述搜索分组                            |          | In future release |
| **直接从第三方用户目录导入（如 AD, LDAP, SAML）** |          | In future release |
| 分组嵌套、分层                                    |          | In future release |
| 查看分组的子分组                                  |          | In future release |
| 分组通过 namespace、多租户管理                    |          | In future release |
| 查看一个分组具备的所有用户                        |          |               YES |
| 查看一个分组具备的所有角色                        |          |               YES |
| 查看一个分组具备的所有权限                        |          |               YES |
| 配置                                              |          |                   |
| 自定义授权流程策略（authorization policies）      |          | In future release |
| 自定义是否将权限加入 Access Token                 |          | In future release |
| 自定义是否将角色加入 Access Token                 |          | In future release |
| 自定义是否将分组加入 Access Token                 |          | In future release |
