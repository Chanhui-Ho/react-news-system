import TopHeader from '../../components/sandbox/TopHeader';
import SideMenu from '../../components/sandbox/SideMenu';
import { Outlet } from 'react-router-dom';

export default function NewsSandBox(){
    return (
        <div>
            <TopHeader></TopHeader>
            <SideMenu></SideMenu>

            <Outlet></Outlet>
        </div>
    )
}