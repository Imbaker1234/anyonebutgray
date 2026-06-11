import { ClipboardList } from 'lucide-react';
import type { RecordRequest } from '../content/recordsRequests';

export function RecordRequestList({ requests }: { requests: RecordRequest[] }) {
  return (
    <div className="requestList">
      {requests.map((request) => (
        <article className="requestItem" key={request.id}>
          <div className="requestItem__header">
            <ClipboardList aria-hidden="true" size={19} />
            <div>
              <span>{request.status}</span>
              <h3>{request.title}</h3>
            </div>
          </div>
          <p className="requestItem__agency">{request.agency}</p>
          <p>{request.purpose}</p>
          <ul>
            {request.requestedRecords.map((record) => (
              <li key={record}>{record}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
