/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import { Typography } from 'antd'
import { DataTableColumn, createTablePlugin, DetailSidebar, DataInspector, Layout } from 'flipper-plugin'
import React from 'react'

type Row = {
	time: number,
	type: string,
	data: Object,
}

const columns: DataTableColumn<Row>[] = [
	{
		key: 'time',
		title: 'Time',
		width: 100,
		onRender: e => {
			const now = new Date(e.time)
			const str = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
			return <p>{str}</p>
		},
		inversed: true,
	},
	{
		key: 'type',
		title: 'Event',
		onRender: e => {
			return <p>{e.type}</p>
		},
	},
]


function renderSidebar(row: Row) {
	return (
		<Layout.Container gap pad>
			<Typography.Title level={4}>Detail</Typography.Title>
			<DataInspector data={row.data} expandRoot={true} />
		</Layout.Container>
	)
}

module.exports = createTablePlugin<Row>({
	columns,
	renderSidebar,
	key: 'time',
	method: 'newMessage'
})