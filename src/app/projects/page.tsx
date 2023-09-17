export default function Projects() {
  return (
    <section id='projects' className='pt-20'>
      <h1 className='text-lg text-purple-400 pb-1'>Projects</h1>
      <p>Pollse</p>
      <p className='text-zinc-500 italic'>
        Application for gathering consensus with real-time response view
      </p>
      <ul className='list-disc'>
        <li>
          Designed a full stack application around the integration of WebSocket
          using Socket.io library to allow bi-directional communication so
          real-time polling results can be displayed on a bar graph utilizing
          Chart.js
        </li>
      </ul>
      <br />
      <p>SheetsQL-ifier</p>
      <p className='text-zinc-500 italic'>
        Application for import and export between Google Sheets and PostgresQL
        databases
      </p>
      <ul className='list-disc'>
        <li>
          Conceptualized and engineered PostgresQL database tables to integrate
          with Google Sheets columns/rows and vice versa using SQL queries and
          Google RESTful structure requirements so contents can be converted
          appropriately on both platforms
        </li>
        <li>
          Implemented authenticated using OAuth 2.0 to allow private access of
          Google Drive and Google Sheets
        </li>
      </ul>
    </section>
  );
}
