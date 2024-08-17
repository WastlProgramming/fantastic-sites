import * as React from 'react';
import { useState, useEffect } from 'react';
import './SitesList.css';

function SitesList() {
    const [sites, setSites] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('/config.json')
            .then(response => response.json())
            .then(data => {
                const activeSites = data.sites.filter(site => site.status);
                setSites(activeSites);

                const uniqueCategories = [...new Set(activeSites.map(site => site.category))];
                setCategories(uniqueCategories);
            })
            .catch(error => console.error('Error loading sites:', error));
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredSites = sites.filter(site => {
        const matchesCategory = selectedCategory === '' || site.category === selectedCategory;
        const matchesSearch = site.name.toLowerCase().includes(searchTerm) || site.description.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="sites-list-container">
            <h2 className="sites-list-title">Fantastic Sites</h2>
            
            <div className="filter-container">
                <div className="category-filter">
                    <label htmlFor="category">Filter by Category: </label>
                    <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="">All Categories</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Search sites..." 
                        value={searchTerm} 
                        onChange={handleSearchChange} 
                    />
                </div>
            </div>

            <ul className="sites-list">
                {filteredSites.map((site, index) => (
                    <li key={index} className="site-item">
                        <a href={site.url} target="_blank" rel="noopener noreferrer" className="site-link">
                            <div className="site-content">
                                <h3 className="site-name">{site.name}</h3>
                                <p className="site-description">{site.description}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SitesList;
