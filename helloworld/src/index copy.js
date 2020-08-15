	import React from "react";
	import ReactDOM from "react-dom";
	import App from "./components/App";

	class CreateDynamicTable extends React.Component {
		constructor() {
			super();

			this.state = {
				row: 1,
				column: 2,
				isTableRender: false,
			};
		}

		generateTable = () => {
			const { row, column } = this.state;
			const isTableRender = row && row > 0 && column && column >= 0;
			this.setState({ isTableRender });
		};

		renderTable() {
			const rows = Array.from({ length: this.state.row });
			const columns = Array.from({ length: this.state.column });
			return rows.map((item, index) => {
				return (
					<tr key={index}>
						{columns.map((item, index) => {
							return (
								<td
									key={index}
									style={{
										borderWidth: 1,
										borderStyle: "solid",
										borderColor: "red",
										height: "30px",
									}}
								></td>
							);
						})}
					</tr>
				);
			});
			this.setState({ isTableRender: false });
		}

		updateState = (event) => {
			this.setState({
				[event.target.name]: event.target.value,
				isTableRender: false,
			});
		};

		render() {
			let tabelElement = null;
			if (this.state.isTableRender) {
				tabelElement = (
					<table style={{ borderCollapse: "collapse", width: "100%" }}>
						<tbody>{this.renderTable()}</tbody>
					</table>
				);
			}

			return (
				<div>
					Row{" "}
					<input
						type="text"
						value={this.state.row}
						name="row"
						onChange={this.updateState}
					></input>
					Column{" "}
					<input
						type="text"
						name="column"
						value={this.state.column}
						onChange={this.updateState}
					></input>
					<button onClick={this.generateTable}>Click Me</button>
					{tabelElement}
				</div>
			);
		}
	}

	ReactDOM.render(<CreateDynamicTable />, document.getElementById("root"));
