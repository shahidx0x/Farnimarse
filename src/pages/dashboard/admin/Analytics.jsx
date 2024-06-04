function Analytics() {
  return (
    <div className="dashboard-section w-screen">
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:px-16">
        <div className="bg-white dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
          <div className="text-gray-700 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-dashboard"
              width={32}
              height={32}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={12} cy={13} r={2} />
              <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
              <path d="M6.4 20a9 9 0 1 1 11.2 0Z" />
            </svg>
          </div>
          <div className="pl-3 pr-10 mt-1">
            <h3 className="font-normal leading-4 text-gray-800 dark:text-gray-100 text-base">
              Profit Earned
            </h3>
            <div className="flex items-end mt-4">
              <h2 className="text-indigo-700 dark:text-indigo-600 text-2xl leading-normal font-bold">
                2,330
              </h2>
              <p className="ml-2 mb-1 text-sm text-gray-600 dark:text-gray-400">
                from 2,125
              </p>
            </div>
            <div className="flex items-center mt-5">
              <div className="text-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-trending-up"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="3 17 9 11 13 15 21 7" />
                  <polyline points="14 7 21 7 21 14" />
                </svg>
              </div>
              <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">
                7.2% Increase
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
          <div className="text-gray-700 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-dashboard"
              width={32}
              height={32}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={12} cy={13} r={2} />
              <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
              <path d="M6.4 20a9 9 0 1 1 11.2 0Z" />
            </svg>
          </div>
          <div className="pl-3 pr-10 mt-1">
            <h3 className="font-normal leading-4 text-gray-800 dark:text-gray-100 text-base">
              Average Click Rate
            </h3>
            <div className="flex items-end mt-4">
              <h2 className="text-indigo-700 dark:text-indigo-600 text-2xl leading-normal font-bold">
                22.3%
              </h2>
              <p className="ml-2 mb-1 text-sm text-gray-600 dark:text-gray-400">
                from 21.2%
              </p>
            </div>
            <div className="flex items-center mt-5">
              <div className="text-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-trending-up"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="3 17 9 11 13 15 21 7" />
                  <polyline points="14 7 21 7 21 14" />
                </svg>
              </div>
              <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">
                7.2% Increase
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
          <div className="text-gray-700 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-dashboard"
              width={32}
              height={32}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={12} cy={13} r={2} />
              <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
              <path d="M6.4 20a9 9 0 1 1 11.2 0Z" />
            </svg>
          </div>
          <div className="pl-3 pr-10 mt-1">
            <h3 className="font-normal leading-4 text-gray-800 dark:text-gray-100 text-base">
              Total Sales
            </h3>
            <div className="flex items-end mt-4">
              <h2 className="text-indigo-700 dark:text-indigo-600 text-2xl leading-normal font-bold">
                2,330
              </h2>
              <p className="ml-2 mb-1 text-sm text-gray-600 dark:text-gray-400">
                from 2,850
              </p>
            </div>
            <div className="flex items-center mt-5">
              <div className="text-red-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-trending-down"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="3 7 9 13 13 9 21 17" />
                  <polyline points="21 10 21 17 14 17" />
                </svg>
              </div>
              <p className="text-red-400 text-xs tracking-wide font-bold leading-normal pl-1">
                3.5% Decrease
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-dashboard text-gray-700 dark:text-gray-400"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx={12} cy={13} r={2} />
            <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
            <path d="M6.4 20a9 9 0 1 1 11.2 0Z" />
          </svg>
          <div className="pl-3 pr-10 mt-1">
            <h3 className="font-normal leading-4 text-gray-800 dark:text-gray-100 text-base">
              Profit Earned
            </h3>
            <div className="flex items-end mt-4">
              <h2 className="text-indigo-700 dark:text-indigo-600 text-2xl leading-normal font-bold">
                $1200
              </h2>
              <p className="ml-2 mb-1 text-sm text-gray-600 dark:text-gray-400">
                from $800
              </p>
            </div>
            <div className="flex items-center mt-5">
              <div className="text-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-trending-up"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="3 17 9 11 13 15 21 7" />
                  <polyline points="14 7 21 7 21 14" />
                </svg>
              </div>
              <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">
                7.2% Increase
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container p-2 mx-auto sm:p-4 text-gray-800">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Registerd Users
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col className="w-24" />
              </colgroup>
              <thead className="bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">Client</th>
                  <th className="p-3">Issued</th>
                  <th className="p-3">Due</th>
                  <th className="p-3 text-right">Amount</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                  <td className="p-3">
                    <p>Microsoft Corporation</p>
                  </td>
                  <td className="p-3">
                    <p>14 Jan 2022</p>
                    <p className="text-gray-600">Friday</p>
                  </td>
                  <td className="p-3">
                    <p>01 Feb 2022</p>
                    <p className="text-gray-600">Tuesday</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>$15,792</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md bg-blue-600 text-gray-50">
                      <span>Pending</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Analytics;
