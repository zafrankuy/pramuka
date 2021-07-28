import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import HymneData from '../../data/hymne-pramuka'
import { BASE_PATH } from '../../constants'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = 'Hymne Pramuka'
const desc = 'Lirik beserta audio Hymne Pramuka di Buku Saku Pramuka'
const url = BASE_PATH + '/materi-pramuka/hymne-pramuka/'

function HymnePramukaPage() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Hymne Pramuka" href="/materi-pramuka/hymne-pramuka/" />
        <ChapterTitle subTitle="Hymne Pramuka" title="Materi Pramuka" />

        <div className="text-left">
          <div className="overflow-hidden mt-4 rounded shadow-lg bg-card" id={HymneData.id}>
            <div className="relative">
              <img className="w-full" src="/assets/6649.jpg" alt="Anak-anak bernyanyi" />
            </div>
            <div className="py-4 px-6">
              <ol>
                {HymneData.data.lyrics.map((li) => (
                  <li className="mb-2" key={li}>
                    {li}
                  </li>
                ))}
              </ol>

              <audio controls className="mt-8">
                <source src={HymneData.data.audio} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default HymnePramukaPage