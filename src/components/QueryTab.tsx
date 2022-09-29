import { Stack, IStackTokens  } from '@fluentui/react';
import { TextField } from '@fluentui/react/lib/TextField';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import * as React from 'react';

export interface QueryTabProps {
    queryTittle: string
    secondaryText: string
    actionButton: string
    showHardCopy: string
}

const stackTokens: IStackTokens = { childrenGap: 60  };

export class QueryTab extends React.Component<{queryTittle: string
    secondaryText: string
    actionButton: string
    showHardCopy: string}, QueryTabProps> {
    public render() {
        function _alertClicked(): void {
            alert('Clicked');
        }

        return (
            <div className="queryTab" >
                <Stack>
                    <h1 className='tabTitle'>{this.props.queryTittle}</h1>
                    
                </Stack>
                <Stack style={stackTokens} className="inputLists">
                    <TextField label="Book Tittle" placeholder="Harry Potter" />
                    <TextField label="Author" placeholder="J. K. Rowling" />
                    <TextField label="ISBN" placeholder="9780747532743" />
                    {this.props.showHardCopy === "yes" ? (
                    <div className='form-control'>
                        <label>Hard copy</label>
                        <input type="checkbox" ></input>    
                    </div>) : <div/>
                    }
                </Stack> 
                <PrimaryButton text={this.props.actionButton} onClick={_alertClicked} allowDisabledFocus disabled={false} checked={false} />
            </div>
        );
    }
};