import React from 'react'
import Mentions from '.'
export default function Test() {
    const onChange = (value) => {
        console.log('Change:', value);
    };

    const onSelect = (option) => {
        console.log('select', option);
    };
    return (
        <div>
            <Mentions
                style={{ width: '100%' }}
                onChange={onChange}
                onSelect={onSelect}
                defaultValue="@afc163"
                options={[
                    {
                        value: 'afc163',
                        label: 'afc163',
                    },
                    {
                        value: 'zombieJ',
                        label: 'zombieJ',
                    },
                    {
                        value: 'yesmeck',
                        label: 'yesmeck',
                    },
                ]} />
        </div>
    )
}
