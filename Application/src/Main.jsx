import React from 'react';

import Route from '../Routes/Routes';
import Theme from '../CommonComponents/Styles/Theme';
import GlobalStateProvider from '../GlobalStates/UserStateProvider';

const Main = () =>(
   <GlobalStateProvider>
      <Theme>
         <Route/>
      </Theme>
   </GlobalStateProvider>
        
);

export default Main; 