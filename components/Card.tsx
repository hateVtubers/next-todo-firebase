import type { UserData } from "../interfaces/UserData";
import Image from "next/image";

export const Card = ({ user }: { user: UserData } | { user: null }) => {
  return (
    <div className="flex gap-2 pr-3 dark:bg-blue-zodiac-500 bg-bright-turquoise-500 dark:text-bright-turquoise-500 text-blue-zodiac-500 rounded w-56 transition-colors">
      {user ? (
        <Image
          src={user.photoURL as string}
          alt={user.displayName as string}
          width={68}
          height={64}
          priority={true}
          decoding="async"
          className="rounded-l dark:bg-bright-turquoise-500 bg-blue-zodiac-500"
        />
      ) : (
        <div className="h-16 dark:bg-bright-turquoise-500 bg-blue-zodiac-500 transition-colors" style={{ width: "68px" }}></div>
      )}
      <div className="grid grid-rows-2 place-items-center py-3 pr-1">
        {user ? (
          <>
            <h2 className="text-xs">{user.displayName}</h2>
            <span className="text-xs">Logged with {user.providerId}</span>
          </>
        ) : (
          <>
            <div className="h-3 w-16 dark:bg-bright-turquoise-500 bg-blue-zodiac-500 rounded-full transition-colors"></div>
            <div className="h-3 w-28 dark:bg-bright-turquoise-500 bg-blue-zodiac-500 rounded-full transition-colors"></div>
          </>
        )}
      </div>
    </div>
  );
};
