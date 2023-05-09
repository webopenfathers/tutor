
# https://x6.antv.vision/zh/examples/node/native-node#rect

  // 菜单列表
    const menuList = [
      {
        name: '系统管理',
        code: '1',
        children: [
          {
            name: '用户管理',
            code: '101',
            children: [
              {
                name: '添加用户',
                code: '102',
              },
              {
                name: '编辑用户',
                code: '103',
              },
              {
                name: '删除用户',
                code: '104',
              },
            ],
          },
          {
            name: '角色管理',
            code: '105',
            children: [
              {
                name: '添加角色',
                code: '106',
              },
            ],
          },
        ],
      },
      {
        name: '业务管理',
        code: '2',
        children: [
          {
            name: '流程管理',
            code: 'process_manage',
          },
        ],
      },
      {
        name: '订单管理',
        code: '3',
      },
    ];

    // 权限列表
    const myMenuCode = ['1', '106', '105', '3'];

    const filterMenu = (menuList, menuCode) => {
      return menuList
        .filter((item) => {
          return menuCode.indexOf(item.code) > -1;
        })
        .map((item) => {
          item = Object.assign({}, item);
          if (item.children) {
            item.children = filterMenu(item.children, menuCode);
          }
          return item;
        });
    };

    // 过滤后的菜单
    const myMenu = filterMenu(menuList, myMenuCode);

    console.log(myMenu);
