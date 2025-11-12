import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const [value, setValue] = useState(0)
    const navigate  = useNavigate()
    function NewValue(event, valueNew) {
        setValue(valueNew)
        if (valueNew === 0) navigate("/");
        if (valueNew === 1) navigate("/TimerFocuse");

    }
    return(
        <div className='container_footer'>
            <BottomNavigation showLabels value={value} onChange={NewValue}>
                <BottomNavigationAction
                  label="خانه"
                  icon={<HomeIcon />}
                  sx={{
                    color: "blue",        // رنگ پیش‌فرض
                    "&.Mui-selected": {
                      color: "blue",      // رنگ وقتی انتخاب شده (active)
                    },
                  }}
                />

            </BottomNavigation>
        </div>
    )
}