/* import { Stack, IStackTokens  } from '@fluentui/react';
import { TextField } from '@fluentui/react/lib/TextField';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import * as React from 'react';
import './style.css';

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
            <div className="queryTab" >
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
}; */
import * as React from 'react';
import './style.css';

import { DetailsList, buildColumns, IColumn } from '@fluentui/react/lib/DetailsList';

export interface Book {
    bookTittle: string;
    author: string;
    ISBN: number;
    hardCover: boolean
}
export interface BooksListProps {
    sortedItems: Book[];
    columns: IColumn[];
}

export class LibraryDisplay extends React.Component<{}, BooksListProps> {
    items: Book [] = [
        {
            "bookTittle" : "Harry Potter",
            "author" : "J. K. Rowling",
            "ISBN": 12345,
            "hardCover" : true
        },
        {
            "bookTittle" : "Wonder",
            "author" : "R. J. Palacio",
            "ISBN": 15462354,
            "hardCover" : true
        },
        {
            "bookTittle" : "Factfulness",
            "author" : "Hans Rossling",
            "ISBN": 987654321,
            "hardCover" : false
        },
    ];
  constructor(props: {}) {
    super(props);

    this.state = {
      sortedItems: this.items,
      columns: this._buildColumns(this.items),
    };
  }

  public render() {
    const { sortedItems, columns } = this.state;

    return (
      <DetailsList
        className='displayScreen'
        items={sortedItems}
        setKey="set"
        columns={columns}
        selectionMode={0}
      />
    );
  }

  private _onColumnClick = (event: React.MouseEvent<HTMLElement>, column: IColumn): void => {
    const { columns } = this.state;
    let { sortedItems } = this.state;
    let isSortedDescending = column.isSortedDescending;

    // If we've sorted this column, flip it.
    if (column.isSorted) {
      isSortedDescending = !isSortedDescending;
    }

    // Sort the items.
    sortedItems = _copyAndSort(sortedItems, column.fieldName!, isSortedDescending);

    // Reset the items and columns to match the state.
    this.setState({
      sortedItems: sortedItems,
      columns: columns.map(col => {
        col.isSorted = col.key === column.key;

        if (col.isSorted) {
          col.isSortedDescending = isSortedDescending;
        }

        return col;
      }),
    });
  };

  private _buildColumns(items: Book[]): IColumn[] {
    const columns = buildColumns(items, false, this._onColumnClick);

    //indicate that all columns except thumbnail column can be sorted
    columns.forEach((column: IColumn) => {
      if (column.name) {
        column.showSortIconWhenUnsorted = true;
      }
    });

    return columns;
  }

  private _onColumnHeaderContextMenu(column: IColumn | undefined, ev: React.MouseEvent<HTMLElement> | undefined): void {
    console.log(`column ${column!.key} contextmenu opened.`);
  }

  private _onItemInvoked(item: any, index: number | undefined): void {
    alert(`Item ${item.name} at index ${index} has been invoked.`);
  }
}

function _renderItemColumn(item?: Book, index?: number, column?: IColumn) {
  const fieldContent = item![column!.fieldName as keyof Book] as string;
  return <span>{fieldContent}</span>;
}

function _copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
  const key = columnKey as keyof T;
  return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
}
