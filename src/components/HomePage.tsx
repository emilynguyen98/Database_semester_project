import { Stack, Text, CompoundButton, IStackTokens } from '@fluentui/react'
import { QueryTab } from './QueryTab'
import { LibraryDisplay } from './LibraryDisplay'
import { useState } from 'react';


const stackTokens: IStackTokens = { childrenGap: 60};
const buttonsStackTokens: IStackTokens = { childrenGap: 60};
const headerStackTokens: IStackTokens = { childrenGap: -45};

const HomePage = () => {
    const [onAddNew, setOnAddNew] = useState(false);
    const [onDisplayList, setOnDisplayList] = useState(false);
    const [onSearch, setOnSearch] = useState(false);
    
    function onAddNewClicked() : void {
      setOnAddNew(true);
      setOnDisplayList(false);
      setOnSearch(false);
    }
  
    function onDisplayClicked() : void {
      setOnAddNew(false);
      setOnDisplayList(true);
      setOnSearch(false);
    }
  
    function onSearchClicked() : void {
      setOnAddNew(false);
      setOnDisplayList(false);
      setOnSearch(true);
    }
  return (
    <Stack className='container' horizontalAlign="center" verticalAlign="center" verticalFill tokens={stackTokens}>
        <Stack className='container_header' horizontalAlign="center" verticalAlign="center" verticalFill tokens={headerStackTokens} >
          <h1 className=''>Personal Library</h1>
          <Text className="container_quote" variant="large">"A reader lives a thousand lives before he dies"</Text>
        </Stack>
        <Stack className="container_buttonStack" horizontal tokens={buttonsStackTokens} horizontalAlign="center">
          <CompoundButton primary secondaryText="Add your new favorite book" disabled={false} checked={onAddNew} onClick={onAddNewClicked}>
          Add new book
          </CompoundButton>
          <CompoundButton primary secondaryText="See what's in your library" disabled={false} checked={onDisplayList} onClick={onDisplayClicked}>
            Your List
          </CompoundButton>
          <CompoundButton primary secondaryText="Look up a book, author" disabled={false} checked={onSearch} onClick={onSearchClicked}>
            Search a book
          </CompoundButton>
        </Stack>
        <div>
          {onAddNew ? (<QueryTab showHardCopy="yes" secondaryText='Add a book' actionButton='Add'/>):<div/>}
          {onSearch ? (<QueryTab showHardCopy="no" secondaryText='Search for a book' actionButton='Search'/>) : <div/>}
          {onDisplayList ? (<LibraryDisplay />) : <div/>}
        </div>
        
      </Stack>
  )
}

export default HomePage
