export default {
    simple: `
import React, {useMemo, useState, useContext} from 'react';

export default function Demo(){
    const [counter, setCounter] = useState<number>(0);

    return (
        <div>
        <button 
            onClick={()=>{
            setCounter(counter+1);
            }}
            style={{
            padding: 10
            }}
        >
            add
        </button>
        <div>{counter}</div>
        </div>
    )
}
    `,
    components: `
import {Switch} from '@byte-design/ui';
import React, { useState, useCallback, Fragment } from 'react';

export default function RadioDemo() {
    const [checked, setChecked]  = useState(true);
    const handleChange=useCallback((v: boolean) => {
        setChecked(v);
    }, []);

    return (
        <Fragment>
            <Switch
                style={{marginRight: '20px'}}
                size="lg"
                checked={checked}
                onValueChange={handleChange}/>
            <Switch
                style={{marginRight: '20px'}}
                size="md"
                checked={checked}
                onValueChange={handleChange}/>
            <Switch
                size="sm"
                checked={checked}
                onValueChange={handleChange}/>
        </Fragment>
    );
};
    `
}