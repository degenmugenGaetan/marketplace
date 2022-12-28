import { BiRefresh, BiLinkExternal } from 'react-icons/bi'
import { MdShare, MdMoreVert } from 'react-icons/md'
import NFTSubInfo from './NFTSubInfo'

const style = {
  topContainer: `flex items-center justify-between`,
  collectionTitle: `text-lg font-semibold text-blue-500`,
  actionItems: `flex divide-x divide-gray-300 rounded-lg border border-gray-300,`,
  actionItemContainer: `flex cursor-pointer items-center justify-center p-3`,
  icon: `h-6 w-6 text-gray-500 dark:text-gray-400`,
  assetTitle: `pt-6 text-4xl font-bold text-gray-700 dark:text-gray-100`,
  subInfoContainer: `hidden lg:block`,
}

const NFTBasicInfo = ({ name }) => {
  // heroicons are used (Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS)
  const actionItems = [
    {
      icon: <BiRefresh className={style.icon} />,
    },
    {
      icon: <BiLinkExternal className={style.icon} />,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current dark:fill-white">
      <path fillRule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" clipRule="evenodd" />
    </svg>
    ,
    },
    {
      icon: <MdMoreVert className={style.icon} />,
    },
  ]

  return (
    <div>
      <div className={style.topContainer}>
        <div className={style.collectionTitle}>DegenMugen</div>

        <div className={style.actionItems}>
          {actionItems.map((item, index) => (
            <div key={index} className={style.actionItemContainer}>
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      <div className={style.assetTitle}>{name}</div>

      <div className={style.subInfoContainer}>
        <NFTSubInfo />
      </div>
    </div>
  )
}

export default NFTBasicInfo
