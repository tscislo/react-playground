import {Usable, use} from "react";

interface Album {id:number, title: string, year: number}

let cache = new Map();

export function fetchData(url: string): Usable<Album[]> {
    if (!cache.has(url)) {
        cache.set(url, getData(url));
    }
    return cache.get(url);
}

async function getData(url:string) {
    if (url === '/the-beatles/albums') {
        return await getAlbums();
    } else {
        throw Error('Not implemented');
    }
}

async function getAlbums(): Promise<Album[]> {
    // Add a fake delay to make waiting noticeable.
    await new Promise(resolve => {
        setTimeout(resolve, 3000);
    });

    return [{
        id: 13,
        title: 'Let It Be',
        year: 1970
    }, {
        id: 12,
        title: 'Abbey Road',
        year: 1969
    }, {
        id: 11,
        title: 'Yellow Submarine',
        year: 1969
    }, {
        id: 10,
        title: 'The Beatles',
        year: 1968
    }, {
        id: 9,
        title: 'Magical Mystery Tour',
        year: 1967
    }, {
        id: 8,
        title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
        year: 1967
    }, {
        id: 7,
        title: 'Revolver',
        year: 1966
    }, {
        id: 6,
        title: 'Rubber Soul',
        year: 1965
    }, {
        id: 5,
        title: 'Help!',
        year: 1965
    }, {
        id: 4,
        title: 'Beatles For Sale',
        year: 1964
    }, {
        id: 3,
        title: 'A Hard Day\'s Night',
        year: 1964
    }, {
        id: 2,
        title: 'With The Beatles',
        year: 1963
    }, {
        id: 1,
        title: 'Please Please Me',
        year: 1963
    }];
}


export const MySuspenseComponent = () => {
    const albums = use<Album[]>(fetchData('/the-beatles/albums'));

    return     <ul>
        {albums?.map(album => (
                <li key={album.id}>
                    {album.title} ({album.year})
                </li>
        ))}
    </ul>
}
