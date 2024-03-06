import * as React from 'react';
import { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import IconButton from '@mui/material/IconButton';
import CategoryIcon from '@mui/icons-material/Category';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';

const Adminmenu = () => {

    const [dashboardHidden, setDashboardHidden] = useState(false);
    const navigate = useNavigate();

    const toggleDashboardVisibility = () => {
        setDashboardHidden(!dashboardHidden);
    };

  return (
    <React.Fragment>
                <ListSubheader>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton onClick={toggleDashboardVisibility}>
                            <ChevronLeftIcon />
                        </IconButton>
                        Clothing Store
                    </div>
                </ListSubheader>
                {!dashboardHidden && (
                    <>
                        <ListItemButton onClick={() => {navigate('/dashboard/admin')}}>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                        <ListItemButton onClick={() => navigate('/dashboard/admin/products')}>
                            <ListItemIcon>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText primary="Products" />
                        </ListItemButton>
                        <ListItemButton onClick={() => navigate('/dashboard/admin/create-category')}>
                            <ListItemIcon>
                                <CategoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Add Category" />
                        </ListItemButton>
                        <ListItemButton onClick={() => navigate('/dashboard/admin/create-product')}>
                            <ListItemIcon>
                                <AddCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Add Product" />
                        </ListItemButton>
                        {/* <ListItemButton onClick={() => navigate('/categories')}>
                            <ListItemIcon>
                                <LayersIcon />
                            </ListItemIcon>
                            <ListItemText primary="Categories" />
                        </ListItemButton> */}
                        <ListItemButton onClick={() => navigate('/dashboard/admin/orders')}>
                            <ListItemIcon>
                                <AssignmentIcon />
                            </ListItemIcon>
                            <ListItemText primary="Orders" />
                        </ListItemButton>
                        <ListItemButton onClick={() => navigate('/dashboard/admin/users')}>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItemButton>
                        {/* <ListItemButton onClick={() => navigate('/sellers')}>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sellers" />
                        </ListItemButton> */}
                        {/* <ListItemButton onClick={() => navigate('/transactions')}>
                            <ListItemIcon>
                                <AccountBalanceIcon />
                            </ListItemIcon>
                            <ListItemText primary="Transactions" />
                        </ListItemButton> */}
                        
                    </>
                )}
            </React.Fragment>
  )
}

export default Adminmenu