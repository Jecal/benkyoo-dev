import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';

// firebase
import { firestore, storage, auth } from '../firebaseConfig';
import { addDoc, collection, getDocs, setDoc } from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { useAuthState } from 'react-firebase-hooks/auth';

// uuid
import { v4 } from 'uuid';

// chakra
import {
    Container,
    VStack,
    Grid,
    GridItem,
    Box,
    Input,
    Textarea,
    Button,
    Text, Heading,
    Link
} from '@chakra-ui/react'

function NoteDisplayPage() {
    return (
        <>
            <VStack spacing={'3vh'}>
                <Navbar />
                <GridLayout />
            </VStack>
        </>
    )
}

const GridLayout = () => {
    return (
        <>
            <Container mt={'2vh'} centerContent>
                <Grid
                templateAreas={`"sb no no no no"
                                "sb no no no no"
                                "sb no no no no"`}
                gridTemplateRows={'25vh 25vh 25vh'}
                gridTemplateColumns={'14vw 14vw 14vw 14vw 14vw'}
                gap={'2vh'}
                >
                    <Sidebar />
                    <PDFdisplay />
                </Grid>
            </Container>
        </>
    )
}

const PDFdisplay = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async() => {
            const postsCollection = collection(firestore, 'posts');
            const postSnapshot = await getDocs(postsCollection);
            const postList = postSnapshot.docs.map(
                doc => doc.data()
            );
            setPosts(postList);
        };
        fetchPosts();
    }, []);

    return (
        <>
            <GridItem area={'no'}>
                <Box
                    borderWidth={'1px'}
                    borderRadius={'lg'}
                    h={'79vh'}
                    p={4}
                >
                    <div>
                        {posts.map((post, index) => (
                            <>
                                <Box
                                    borderWidth={'1px'}
                                    borderRadius={'md'}
                                    p={2}
                                    my={2}
                                    key={index}
                                >
                                    <Heading size={'md'}>{post.title}</Heading>
                                    <Text fontSize={'sm'}>{post.description}</Text>
                                    <Text fontSize={'md'}> by {post.author}</Text>
                                    <Button size={'sm'}>
                                        <Link href={post.fileURL}>
                                            view
                                        </Link>
                                    </Button>
                                </Box>
                            </>
                        ))}
                    </div>
                </Box>
            </GridItem>
        </>
    );
};

const Sidebar = () => {
    // file uploading
    const [file, setFile] = useState(null);
    const [URL, setURL] = useState('');
    const [loading, setLoading] = useState(false);

    // file detailing
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [user] = useAuthState(auth);

    const handleUpload = async (e) => {
        e.preventDefault();

        // no file, don't do anything
        if (!file) return;
        setLoading(true);

        try {
            // upload file to storage
            const storageRef = ref(storage, `pdfs/${v4()}`);
            await uploadBytes(storageRef, file)

            // get download url
            const url = await getDownloadURL(storageRef);
            setURL(url);

            // add document to firestore
            await addDoc(collection(firestore, 'posts'), {
                title: title,
                description: description,
                author: user.displayName,
                fileURL: url
            });
        } catch (error) {
            console.error('error uploading files: ', error)
        } finally {
            // form reset
            setTitle('');
            setDescription('');
            setFile(null);
            setLoading(false);
        }
    };

    return (
        <>
            <GridItem area={'sb'}>
                <Box
                    borderWidth={'1px'}
                    borderRadius={'lg'}
                    h={'79vh'}
                    p={4}
                >
                    <VStack
                        spacing={4}
                        as={'form'}
                    >
                        <Input type={'file'} onChange={(e) => setFile(e.target.files[0])} />
                        <Input
                            value={(title)}
                            onChange={(e) => setTitle(e.target.value)}
                        >
                        </Input>
                        <Textarea
                            value={(description)}
                            onChange={(e) => setDescription(e.target.value)}
                        >
                        </Textarea>
                        <Button onClick={handleUpload} isLoading={loading}>upload</Button>
                        {URL && <Text>successfully uploaded</Text>}
                        </VStack>
                </Box>
            </GridItem>
        </>
    )
}

export default NoteDisplayPage