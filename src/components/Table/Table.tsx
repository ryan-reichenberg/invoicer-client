import React, { Component } from 'react'

type  TableProps = {
    headers?: string[],

}
export default class Table extends Component<TableProps> {

    render() {
        return (
            <div className="flex flex-col">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden border-b border-gray-200 sm:rounded-md">
                <table className='w-full border-collapse text-sm p-4 border-t-md'>
                    <tr className='text-left bg-gray-200 text-gray-700 font-semibold'>
                        <th className='py-1 px-5'>CLIENT</th>
                        <th className='py-1 px-5'>MOBILE</th>
                        <th className='py-1 px-5'>JOB</th>
                        <th className='py-1 px-5'>PRICE</th>
                        <th className='py-1 px-5'>STATUS</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td className='py-4 px-5'>Tom Smith</td>
                        <td className='py-4 px-5'>0491 570 156</td>
                        <td className='py-4 px-5'>
                            <p>
                                Web Design
                            </p>
                            <p className='text-xs -mt-1 text-gray-400'>
                                Tom's Construction
                            </p>

                        </td>
                        <td className='py-4 px-5'>$200.00</td>
                        <td className='py-4 px-5'>
                        <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-red-100 text-red-800">Overdue</span>
                        </td>
                        <td><svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg></td>
                    </tr>
                    <tr className='bg-gray-50'>
                        <td className='py-4 px-5'>Tom Smith</td>
                        <td className='py-4 px-5'>0491 570 156</td>
                        <td className='py-4 px-5'>
                            <p>
                                Web Design
                            </p>
                            <p className='text-xs -mt-1 text-gray-400'>
                                Tom's Construction
                            </p>

                        </td>
                        <td className='py-4 px-5'>$200.00</td>
                        <td className='py-4 px-5'>
                        <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-red-100 text-red-800">Overdue</span>
                        </td>
                        <td><svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg></td>
                    </tr>
                    <tr>
                        <td className='py-4 px-5'>Tom Smith</td>
                        <td className='py-4 px-5'>0491 570 156</td>
                        <td className='py-4 px-5'>
                            <p>
                                Web Design
                            </p>
                            <p className='text-xs -mt-1 text-gray-400'>
                                Tom's Construction
                            </p>

                        </td>
                        <td className='py-4 px-5'>$200.00</td>
                        <td className='py-4 px-5'>
                        <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-red-100 text-red-800">Overdue</span>
                        </td>
                        <td><svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg></td>
                    </tr>
                </table>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
