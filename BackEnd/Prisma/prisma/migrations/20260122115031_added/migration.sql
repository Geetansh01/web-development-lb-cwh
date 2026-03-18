-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userPreferencesID_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "userPreferencesID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userPreferencesID_fkey" FOREIGN KEY ("userPreferencesID") REFERENCES "UserPreferences"("id") ON DELETE SET NULL ON UPDATE CASCADE;
