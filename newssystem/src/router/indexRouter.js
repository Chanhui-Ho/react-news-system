import React, { Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

export default function IndexRouter(){
    const element = useRoutes([
        {
            path: '/login',
            element: Lazyload('login/Login')
            // element: <Login></Login>
        },
        {
            path: '/',
            element: <AuthLogin>
                {Lazyload('sandbox/NewsSandBox')}
            </AuthLogin>,
            children: [
                {
                    index: true,
                    element: <Navigate to={'/home'}></Navigate>
                    // element: <Home></Home>
                },
                {
                    path: '*',
                    element: Lazyload('sandbox/nopermission/Nopermission')
                    // element: <Nopermission></Nopermission>
                },
                {
                    path: 'home',
                    element: Lazyload('sandbox/home/Home')
                    // element: <Home></Home>
                },
                {
                    path: 'user-manage/list',
                    element: Lazyload('sandbox/user-manage/UserList')
                    // element: <UserList></UserList>
                },
                {
                    path: 'right-manage/role/list',
                    element: Lazyload('sandbox/right-manage/RoleList')
                    // element: <RoleList></RoleList>
                },
                {
                    path: 'right-manage/right/list',
                    element: Lazyload('sandbox/right-manage/RightList')
                    // element: <RightList></RightList>
                },
            ]
        }
    ]);
    return (
        element
    )
}

//登录态校验
function AuthLogin(props){
    const hasToken = localStorage.getItem('token');
    return (
        <div>
            { hasToken ? props.children : <Navigate to={'/login'}/> }
        </div>
    )
}

//组件懒加载
function Lazyload(path){
    const Component = React.lazy(()=>import(`../views/${path}`));
    return (
        <Suspense fallback={<>Loading...</>}>
            <Component></Component>
        </Suspense>
    )
}
//import()不能直接写变量，会报错，这是因为webpack的现在的实现方式不能实现完全动态
// 虽然import()方法在es规范中是支持动态引入的，但是webpack的实现是并不支持。