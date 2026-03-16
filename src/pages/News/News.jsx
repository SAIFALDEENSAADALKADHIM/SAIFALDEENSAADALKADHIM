import { FaNewspaper, FaAward, FaFlask } from 'react-icons/fa'
import './News.css'

const newsItems = [
  {
    icon: <FaFlask />,
    date: 'March 2025',
    title: 'New Paper Accepted',
    description: 'Research on "Ionization-based aerosol sensor for early detection of Li-ion battery thermal runaway" accepted for publication.',
    tag: 'Publication',
    tagColor: 'blue',
  },
  {
    icon: <FaAward />,
    date: 'November 2024',
    title: 'Paper Published in Sensors & Actuators A',
    description: 'Triple-electrode CNT-based capacitive humidity sensor research published in Elsevier\'s Sensors and Actuators A: Physical.',
    tag: 'Publication',
    tagColor: 'blue',
  },
  {
    icon: <FaNewspaper />,
    date: 'September 2021',
    title: 'Joined Xi\'an Jiaotong University as Research Engineer',
    description: 'Began doctoral research at IEMIT (Institute of Electromechanical and Information Technology), Xi\'an Jiaotong University.',
    tag: 'Career',
    tagColor: 'green',
  },
]

export default function News() {
  return (
    <section id="news" className="news-section">
      <div className="container">
        <h2 className="section-title">Latest News</h2>
        <div className="news-grid">
          {newsItems.map((item, i) => (
            <div className="news-card" key={i}>
              <div className={`news-icon news-icon--${item.tagColor}`}>{item.icon}</div>
              <div className="news-body">
                <div className="news-meta">
                  <span className={`news-tag news-tag--${item.tagColor}`}>{item.tag}</span>
                  <span className="news-date">{item.date}</span>
                </div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
