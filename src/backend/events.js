import { setGuestlist } from 'backend/gatherAPICalls.jsw';

export async function wixMembers_onMemberUpdated(event) {
  console.log(" Event Triggered: Member updated");

  const member = event.entity;
  if (!member) {
    console.log("No member data received");
    return;
  }

  const memberEmail = member.email;
  const memberNickname = member.name || "Unnamed User";
  const memberStatus = member.status;

  console.log(" Email:", memberEmail);
  console.log(" Nickname:", memberNickname);
  console.log(" Status:", memberStatus);

  if (memberStatus?.toUpperCase() === "APPROVED") {
    console.log(" Status is APPROVED. Calling setGuestlist...");
    await setGuestlist(memberEmail, memberNickname);
  } else {
    console.log("Member not approved yet. Skipping setGuestlist.");
  }
}

console.log("hello");
