import * as React from 'react';
import NoteList from 'components/NoteList';
import { RightPane } from 'components/RightPane';
import { LeftPane } from 'components/LeftPane';
import { Switch, Route, useParams } from 'react-router-dom';
import { NoteModel } from 'models/NoteModel';
import NoteItem from './NoteItem';
import { useState } from 'react';

function NoNote() {
    return (
        <div className="App-NoNote">please select a note</div>
    )
}

export interface NotesProps {
    notes: NoteModel[],
}
 
export interface NotesState {
    notes: NoteModel[],
}

class Notes extends React.Component<NotesProps, NotesState> {
    state = {
        notes: this.props.notes
    }
    render() {
        return (
            <React.Fragment>
                <LeftPane>
                    <NoteList notes={this.state.notes}/>
                </LeftPane>
                <RightPane>
                    <Switch>
                        <Route path="/:id" children={<Child notes={this.state.notes} />} />
                        <Route path="*">
                            <NoNote />
                        </Route>
                    </Switch>
                </RightPane>
            </React.Fragment>
        );
    }
}

function Child(props: any) {
    let { id } = useParams();
    // const found = props.notes.find((n: NoteModel) => n.id === id);
    // console.log('found', found);

    const [note, setNote] = useState(
        props.notes.find((n: NoteModel) => n.id === id)
    );

    const handleChangeTitle = (title: string) => {
        setNote({ ...note, title });
    }

    const handleChangeText = (text: string) => {
        setNote({ ...note, text });
    }

    return (
        <NoteItem note={note} onChangeTitle={(title: string) => handleChangeTitle(title)} onChangeText={(text: string) => handleChangeText(text)}/>
    );
}  
 
export default Notes;