import { useGetComments } from "../../mocks/Comments";

function CommentsCard() {
  const { listComments, loading } = useGetComments();
  return (
    <div className="text-white flex gap-3">
      {listComments.slice(0, 4).map((user) => (
        <div key={user.id} className="bg-slate-700 p-3 flex flex-col gap-3 rounded-md">
          <img
            src={user.picture?.large}
            className="h-10 w-10 rounded-full"
            alt={`user_${user?.name}`}
          />
          <h6>
            <span>{user.name.title}</span>
            {user.name.first} {user.name.last}
          </h6>
          <p>{user.email}</p>
          <p>{user.gender}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentsCard;
