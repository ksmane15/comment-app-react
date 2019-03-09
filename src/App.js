import React from "react";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

export default function App() {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					author="Mane"
					timeAgo="Today At 4:00 pm"
					comment="Mane is typing"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Nirali"
					timeAgo="Today At 5:00 pm"
					comment="Nirali is typing"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Mukesh"
					timeAgo="Today At 6:00 pm"
					comment="Mukesh is typing"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
}
