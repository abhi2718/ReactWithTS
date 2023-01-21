type PersonProps = {
  userInfo: {
    firstName: string;
    lastName: string;
  };
  users: {
    firstName: string;
    lastName: string;
  }[];
};

export const Person = (props: PersonProps) => {
  return (
    <div>
      <p>{props.userInfo.firstName}</p>
      {props.users.map((user) => (
        <p key={user.firstName}>
          {user.firstName} {user.lastName}
        </p>
      ))}
    </div>
  );
};
