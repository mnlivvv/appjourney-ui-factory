import { useState } from 'react'
import './DataSets.css'

const DataSets = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [search, setSearch] = useState('')
  const [selectedDatasets, setSelectedDatasets] = useState([])

  // Sample data for datasets
  const datasetsData = [
    {
      id: 1,
      name: 'ImageNet-2023',
      type: 'Image',
      size: '1.2 TB',
      items: '1.4M',
      lastUpdated: '2023-07-10',
      format: 'JPEG/PNG',
      status: 'Ready',
      description: 'A large-scale image dataset for visual recognition tasks, containing millions of labeled images across thousands of categories.'
    },
    {
      id: 2,
      name: 'SNLI Text Corpus',
      type: 'Text',
      size: '538 MB',
      items: '570K',
      lastUpdated: '2023-06-25',
      format: 'TXT/JSON',
      status: 'Ready',
      description: 'A collection of sentence pairs manually labeled for balanced classification with the labels entailment, contradiction, and neutral.'
    },
    {
      id: 3,
      name: 'Speech Commands',
      type: 'Audio',
      size: '2.4 GB',
      items: '105K',
      lastUpdated: '2023-07-05',
      format: 'WAV',
      status: 'Ready',
      description: 'A dataset of spoken words designed to help train and evaluate keyword spotting systems.'
    },
    {
      id: 4,
      name: 'Financial Transactions',
      type: 'Tabular',
      size: '4.8 GB',
      items: '12M',
      lastUpdated: '2023-06-30',
      format: 'CSV/Parquet',
      status: 'Processing',
      description: 'Anonymized financial transaction data for fraud detection and pattern analysis.'
    },
    {
      id: 5,
      name: 'Medical Imaging',
      type: 'Image',
      size: '780 GB',
      items: '420K',
      lastUpdated: '2023-07-15',
      format: 'DICOM',
      status: 'Ready',
      description: 'A collection of medical imaging data including X-rays, MRIs, and CT scans for diagnostic analysis.'
    },
    {
      id: 6,
      name: 'Product Reviews',
      type: 'Text',
      size: '1.1 GB',
      items: '3.2M',
      lastUpdated: '2023-07-08',
      format: 'JSON',
      status: 'Ready',
      description: 'Customer reviews from e-commerce platforms, labeled with sentiment and product categories.'
    },
    {
      id: 7,
      name: 'Urban Sounds',
      type: 'Audio',
      size: '5.6 GB',
      items: '8.7K',
      lastUpdated: '2023-06-28',
      format: 'WAV/MP3',
      status: 'Ready',
      description: 'Audio recordings from urban environments, labeled with sound source and environmental context.'
    },
    {
      id: 8,
      name: 'Climate Measurements',
      type: 'Tabular',
      size: '2.3 GB',
      items: '45M',
      lastUpdated: '2023-07-12',
      format: 'CSV/NetCDF',
      status: 'Ready',
      description: 'Historical climate data including temperature, precipitation, and atmospheric measurements from global stations.'
    }
  ]

  // Filter datasets based on search
  const filteredDatasets = datasetsData.filter(dataset => {
    if (search && !dataset.name.toLowerCase().includes(search.toLowerCase())) {
      return false
    }
    return true
  })

  const toggleDatasetSelection = (id) => {
    if (selectedDatasets.includes(id)) {
      setSelectedDatasets(selectedDatasets.filter(datasetId => datasetId !== id))
    } else {
      setSelectedDatasets([...selectedDatasets, id])
    }
  }

  const isDatasetSelected = (id) => {
    return selectedDatasets.includes(id)
  }

  return (
    <div className="datasets-page">
      <div className="datasets-header">
        <h1>Datasets</h1>
        <div className="datasets-actions">
          <button className="accent-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            <span>Import Dataset</span>
          </button>
        </div>
      </div>
      
      <div className="datasets-tools">
        <div className="search-box">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Search datasets..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="view-toggle">
          <button 
            className={`view-toggle-button ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </button>
          <button 
            className={`view-toggle-button ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      
      {viewMode === 'grid' ? (
        <div className="datasets-grid">
          {filteredDatasets.map(dataset => (
            <div 
              key={dataset.id} 
              className={`dataset-card ${isDatasetSelected(dataset.id) ? 'selected' : ''}`}
              onClick={() => toggleDatasetSelection(dataset.id)}
            >
              <div className="dataset-header">
                <div className="dataset-type-icon">
                  {dataset.type === 'Image' && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  )}
                  {dataset.type === 'Text' && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  )}
                  {dataset.type === 'Audio' && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                    </svg>
                  )}
                  {dataset.type === 'Tabular' && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
                    </svg>
                  )}
                </div>
                <div className="dataset-info">
                  <h3>{dataset.name}</h3>
                  <span className={`dataset-status status-${dataset.status.toLowerCase()}`}>
                    {dataset.status}
                  </span>
                </div>
                <div className="dataset-selection">
                  <div className="checkbox">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="dataset-details">
                <div className="dataset-property">
                  <span className="property-label">Type</span>
                  <span className="property-value">{dataset.type}</span>
                </div>
                <div className="dataset-property">
                  <span className="property-label">Size</span>
                  <span className="property-value">{dataset.size}</span>
                </div>
                <div className="dataset-property">
                  <span className="property-label">Items</span>
                  <span className="property-value">{dataset.items}</span>
                </div>
                <div className="dataset-property">
                  <span className="property-label">Format</span>
                  <span className="property-value">{dataset.format}</span>
                </div>
                <div className="dataset-property">
                  <span className="property-label">Updated</span>
                  <span className="property-value">{dataset.lastUpdated}</span>
                </div>
              </div>
              
              <div className="dataset-description">
                <p>{dataset.description}</p>
              </div>
              
              <div className="dataset-actions">
                <button className="dataset-button">Explore</button>
                <button className="dataset-button secondary">Export</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="datasets-list">
          <div className="datasets-list-header">
            <div className="datasets-list-column name">Name</div>
            <div className="datasets-list-column type">Type</div>
            <div className="datasets-list-column size">Size</div>
            <div className="datasets-list-column items">Items</div>
            <div className="datasets-list-column format">Format</div>
            <div className="datasets-list-column updated">Updated</div>
            <div className="datasets-list-column status">Status</div>
            <div className="datasets-list-column actions">Actions</div>
          </div>
          
          <div className="datasets-list-body">
            {filteredDatasets.map(dataset => (
              <div 
                key={dataset.id} 
                className={`datasets-list-row ${isDatasetSelected(dataset.id) ? 'selected' : ''}`}
                onClick={() => toggleDatasetSelection(dataset.id)}
              >
                <div className="datasets-list-column name">
                  <div className="dataset-name-cell">
                    <div className="checkbox">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>{dataset.name}</span>
                  </div>
                </div>
                <div className="datasets-list-column type">{dataset.type}</div>
                <div className="datasets-list-column size">{dataset.size}</div>
                <div className="datasets-list-column items">{dataset.items}</div>
                <div className="datasets-list-column format">{dataset.format}</div>
                <div className="datasets-list-column updated">{dataset.lastUpdated}</div>
                <div className="datasets-list-column status">
                  <span className={`dataset-status status-${dataset.status.toLowerCase()}`}>
                    {dataset.status}
                  </span>
                </div>
                <div className="datasets-list-column actions">
                  <div className="action-buttons">
                    <button className="icon-button small">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                    <button className="icon-button small">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    </button>
                    <button className="icon-button small">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {selectedDatasets.length > 0 && (
        <div className="bulk-actions-bar">
          <div className="selected-count">
            {selectedDatasets.length} {selectedDatasets.length === 1 ? 'dataset' : 'datasets'} selected
          </div>
          <div className="bulk-actions">
            <button className="bulk-action-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 3v12"></path>
              </svg>
              <span>Export</span>
            </button>
            <button className="bulk-action-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              <span>Tag</span>
            </button>
            <button className="bulk-action-button danger">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              <span>Delete</span>
            </button>
          </div>
          <button className="close-button" onClick={() => setSelectedDatasets([])}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default DataSets