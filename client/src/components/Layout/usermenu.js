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
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Usermenu = () => {

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
                        <ListItemButton onClick={() => {navigate('/dashboard/user')}}>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                        
                        <ListItemButton onClick={() => navigate('/dashboard/user/profile')}>
                            <ListItemIcon>
                                <AccountBoxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                        
                        <ListItemButton onClick={() => navigate('/dashboard/user/orders')}>
                            <ListItemIcon>
                                <AssignmentIcon />
                            </ListItemIcon>
                            <ListItemText primary="Orders" />
                        </ListItemButton>
                        
                        
                        
                    </>
                )}
            </React.Fragment>
  )
}

export default Usermenu