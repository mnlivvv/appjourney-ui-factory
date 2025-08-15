import { useState } from 'react'
import './AIModels.css'

const AIModels = () => {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState('asc')

  // Sample data for models
  const modelsData = [
    { 
      id: 1, 
      name: 'GPT-4 Classifier', 
      type: 'Text', 
      category: 'nlp',
      status: 'active', 
      version: 'v2.1',
      lastUpdated: '2023-07-15',
      accuracy: 94.2,
      latency: 42,
      creator: 'John Doe'
    },
    { 
      id: 2, 
      name: 'BERT Sentiment', 
      type: 'Text', 
      category: 'nlp',
      status: 'active', 
      version: 'v1.3',
      lastUpdated: '2023-06-22',
      accuracy: 89.5,
      latency: 38,
      creator: 'Jane Smith'
    },
    { 
      id: 3, 
      name: 'ResNet Image Classifier', 
      type: 'Image', 
      category: 'vision',
      status: 'active', 
      version: 'v3.0',
      lastUpdated: '2023-07-10',
      accuracy: 92.1,
      latency: 65,
      creator: 'Mike Johnson'
    },
    { 
      id: 4, 
      name: 'DALL-E Generator', 
      type: 'Image', 
      category: 'generative',
      status: 'warning', 
      version: 'v1.0',
      lastUpdated: '2023-07-05',
      accuracy: null,
      latency: 120,
      creator: 'Sarah Williams'
    },
    { 
      id: 5, 
      name: 'YOLO Object Detection', 
      type: 'Image', 
      category: 'vision',
      status: 'active', 
      version: 'v5.0',
      lastUpdated: '2023-06-30',
      accuracy: 90.8,
      latency: 58,
      creator: 'James Brown'
    },
    { 
      id: 6, 
      name: 'Text-to-Speech', 
      type: 'Audio', 
      category: 'speech',
      status: 'active', 
      version: 'v2.2',
      lastUpdated: '2023-07-12',
      accuracy: 88.5,
      latency: 95,
      creator: 'Emily Davis'
    },
    { 
      id: 7, 
      name: 'Speech Recognition', 
      type: 'Audio', 
      category: 'speech',
      status: 'active', 
      version: 'v3.1',
      lastUpdated: '2023-06-25',
      accuracy: 86.3,
      latency: 110,
      creator: 'Robert Wilson'
    },
    { 
      id: 8, 
      name: 'Recommendation Engine', 
      type: 'Structured', 
      category: 'tabular',
      status: 'inactive', 
      version: 'v1.5',
      lastUpdated: '2023-06-18',
      accuracy: 83.7,
      latency: 75,
      creator: 'Alex Turner'
    }
  ]

  // Filter models based on filter and search
  const filteredModels = modelsData.filter(model => {
    // Apply category filter
    if (filter !== 'all' && model.category !== filter) {
      return false
    }
    
    // Apply search filter
    if (search && !model.name.toLowerCase().includes(search.toLowerCase())) {
      return false
    }
    
    return true
  })

  // Sort filtered models
  const sortedModels = [...filteredModels].sort((a, b) => {
    let comparison = 0
    
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name)
        break
      case 'type':
        comparison = a.type.localeCompare(b.type)
        break
      case 'status':
        comparison = a.status.localeCompare(b.status)
        break
      case 'accuracy':
        // Handle null values
        if (a.accuracy === null && b.accuracy === null) comparison = 0
        else if (a.accuracy === null) comparison = 1
        else if (b.accuracy === null) comparison = -1
        else comparison = a.accuracy - b.accuracy
        break
      case 'latency':
        comparison = a.latency - b.latency
        break
      case 'lastUpdated':
        comparison = new Date(a.lastUpdated) - new Date(b.lastUpdated)
        break
      default:
        comparison = 0
    }
    
    return sortOrder === 'asc' ? comparison : -comparison
  })

  const handleSort = (column) => {
    if (sortBy === column) {
      // If already sorting by this column, toggle the order
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      // Otherwise, sort by this column in ascending order
      setSortBy(column)
      setSortOrder('asc')
    }
  }

  return (
    <div className="models-page">
      <div className="models-header">
        <h1>AI Models</h1>
        <button className="accent-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>New Model</span>
        </button>
      </div>
      
      <div className="models-tools">
        <div className="models-filters">
          <div className="filter-tabs">
            <button 
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All Models
            </button>
            <button 
              className={filter === 'nlp' ? 'active' : ''}
              onClick={() => setFilter('nlp')}
            >
              NLP
            </button>
            <button 
              className={filter === 'vision' ? 'active' : ''}
              onClick={() => setFilter('vision')}
            >
              Computer Vision
            </button>
            <button 
              className={filter === 'speech' ? 'active' : ''}
              onClick={() => setFilter('speech')}
            >
              Speech
            </button>
            <button 
              className={filter === 'generative' ? 'active' : ''}
              onClick={() => setFilter('generative')}
            >
              Generative
            </button>
            <button 
              className={filter === 'tabular' ? 'active' : ''}
              onClick={() => setFilter('tabular')}
            >
              Tabular
            </button>
          </div>
          
          <div className="search-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Search models..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        
        <div className="models-actions">
          <button className="icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </button>
          <button className="icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="models-grid">
        {sortedModels.map(model => (
          <div key={model.id} className="model-card">
            <div className="model-header">
              <span className={`model-status status-${model.status}`}></span>
              <h3>{model.name}</h3>
              <div className="model-actions">
                <button className="icon-button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="model-type">
              <span className={`type-badge ${model.type.toLowerCase()}`}>{model.type}</span>
              <span className="version">{model.version}</span>
            </div>
            
            <div className="model-stats">
              <div className="stat">
                <div className="stat-label">Accuracy</div>
                <div className="stat-value">{model.accuracy ? `${model.accuracy}%` : 'N/A'}</div>
              </div>
              <div className="stat">
                <div className="stat-label">Latency</div>
                <div className="stat-value">{model.latency} ms</div>
              </div>
            </div>
            
            <div className="model-meta">
              <div className="meta-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Updated {model.lastUpdated}</span>
              </div>
              <div className="meta-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>{model.creator}</span>
              </div>
            </div>
            
            <div className="model-footer">
              <button className="model-button">View Details</button>
              <button className="model-button secondary">Deploy</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="models-pagination">
        <button className="pagination-button" disabled>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span>Previous</span>
        </button>
        <div className="pagination-pages">
          <button className="pagination-page active">1</button>
          <button className="pagination-page">2</button>
          <button className="pagination-page">3</button>
        </div>
        <button className="pagination-button">
          <span>Next</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default AIModels