import Image from "next/image";
import type { UserData } from "../interfaces/UserData";

// @ts-ignore
export const Card = ({ user }: { user: UserData } | { user: null }) => {
  return (
    <div className="flex gap-2 pr-3 bg-blue-zodiac-500 text-bright-turquoise-500 rounded">
      {user ? (
        <Image
          src={user.photoURL as string}
          alt={user.displayName as string}
          width={68}
          height={64}
          priority={true}
          className="rounded-l"
        />
      ) : (
        <div className="h-16" style={{ width: "68px" }}></div>
      )}
      <div className="grid grid-rows-2 place-items-center py-3 pr-1">
        {user ? (
          <>
            <h2 className="text-xs">{user.displayName}</h2>
            <span className="text-xs">Logged with {user.providerId}</span>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
