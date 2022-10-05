import { Stack, IStackTokens  } from '@fluentui/react';
import { TextField } from '@fluentui/react/lib/TextField';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import * as React from 'react';
import './style.css';

export interface QueryTabProps {
    secondaryText: string
    actionButton: string
    showHardCopy: string
}
const stackTokens: IStackTokens = { childrenGap: 10  };

export class QueryTab extends React.Component<{
    secondaryText: string
    actionButton: string
    showHardCopy: string}, QueryTabProps> {
    public render() {
        function _alertClicked(): void {
            alert('Clicked');
        }

        return (
            <div className="queryTab" style={stackTokens}>
                <Stack className="queryTab_inputLists" horizontalAlign="center" verticalAlign="center" verticalFill tokens={stackTokens} >
                    <TextField className="queryTab_input" label="Book Tittle" placeholder="Harry Potter" />
                    <TextField className="queryTab_input" label="Author" placeholder="J. K. Rowling" />
                    <TextField className="queryTab_input" label="ISBN" placeholder="9780747532743" />
                    {this.props.showHardCopy === "yes" ? (
                    <div className='form-control'>
                        <label>Hard copy</label>
                        <input type="checkbox" ></input>    
                    </div>) : <div/>
                    }
                    <PrimaryButton text={this.props.actionButton} onClick={_alertClicked} allowDisabledFocus disabled={false} checked={false} />
                </Stack> 
            </div>
        );
    }
};