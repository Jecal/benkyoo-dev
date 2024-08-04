import React from 'react';
import { useState, useEffect } from 'react';

// chakra
import {
    Show,
    Input,
} from '@chakra-ui/react';

// firebase
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firestore } from '../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

function NoteSearchBar({ onSearch }) {
    return (
        <>
            <Show above={'800px'}>
                <Input 
                    placeholder={'search up a title, subject, or topic'}
                    onChange={(e) => onSearch(e.target.value.toLowerCase())}
                />
            </Show>
            <Show below={'800px'}>
                <Input 
                    placeholder={'search up a title, subject, or topic'}
                    onChange={(e) => onSearch(e.target.value.toLowerCase())}    
                /> 
            </Show>
        </>
    )
}

export default NoteSearchBar;