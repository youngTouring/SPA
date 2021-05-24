import React from 'react';
import Article from '../components/Article'
const articles = [
    {
        id:1,
        title: "Czym jest perkusyjny chwyt klasyczny?",
        author: "Mikołaj Daraż",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel leo commodo lectus condimentum cursus. Cras non aliquam est. Curabitur in ante purus. Nunc ac tortor nulla. Integer interdum magna mollis iaculis malesuada. Donec tortor purus, iaculis vitae nisi non, molestie mollis elit. Praesent sit amet sollicitudin ipsum, in congue augue. Quisque eu sodales libero. Suspendisse potenti. Pellentesque ac maximus velit. Etiam fringilla nisl vitae eros malesuada ornare. Fusce scelerisque euismod felis in condimentum. Vivamus vehicula consequat feugiat. Donec sed scelerisque elit. Suspendisse consectetur non ligula nec facilisis.'
    },
    {
        id:2,
        title: "Jak efektywniej ćwiczyć?",
        author: "Mikołaj Daraż",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel leo commodo lectus condimentum cursus. Cras non aliquam est. Curabitur in ante purus. Nunc ac tortor nulla. Integer interdum magna mollis iaculis malesuada. Donec tortor purus, iaculis vitae nisi non, molestie mollis elit. Praesent sit amet sollicitudin ipsum, in congue augue. Quisque eu sodales libero. Suspendisse potenti. Pellentesque ac maximus velit. Etiam fringilla nisl vitae eros malesuada ornare. Fusce scelerisque euismod felis in condimentum. Vivamus vehicula consequat feugiat. Donec sed scelerisque elit. Suspendisse consectetur non ligula nec facilisis.'
    },
    {
        id:3,
        title: "Najlepsze ćwiczenia na rozluźnienie mięśni przed graniem",
        author: "Mikołaj Daraż",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel leo commodo lectus condimentum cursus. Cras non aliquam est. Curabitur in ante purus. Nunc ac tortor nulla. Integer interdum magna mollis iaculis malesuada. Donec tortor purus, iaculis vitae nisi non, molestie mollis elit. Praesent sit amet sollicitudin ipsum, in congue augue. Quisque eu sodales libero. Suspendisse potenti. Pellentesque ac maximus velit. Etiam fringilla nisl vitae eros malesuada ornare. Fusce scelerisque euismod felis in condimentum. Vivamus vehicula consequat feugiat. Donec sed scelerisque elit. Suspendisse consectetur non ligula nec facilisis.'
    }
]
const HomePage = () => {
    const artlist = articles.map(article => (
        <Article key = {article.id} {...article}/>
    ))
    return (
        <div className = 'home'>
            {artlist}
        </div>
    );
}

export default HomePage;