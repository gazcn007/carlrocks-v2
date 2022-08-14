---
title: OS Review and General Questions
date: 2016-10-10
categories: OS
tags: [OS]
---

# Assignments:
## Shell Scriping:
- The different variants of exec do slightly different things. Some take a variable number of string arguments. Others take a list of strings. Still others let you specify the environment that the process runs with. This particular variant expects a program name and an array (also called a vector, hence the ‘v’) of string arguments (the first one has to be the program name). The ‘p’ means that instead of providing the full file path of the program to run, we’re going to give its name, and let the operating system search for the program in the path.
- Once fork() returns, we actually have two processes running concurrently. The child process will take the first if condition (where pid == 0).
- We use waitpid() to wait for the process’s state to change. Unfortunately, waitpid() has a lot of options (like exec()). Processes can change state in lots of ways, and not all of them mean that the process has ended. A process can either exit (normally, or with an error code), or it can be killed by a signal. So, we use the macros provided with waitpid() to wait until either the processes are exited or killed. Then, the function finally returns a 1, as a signal to the calling function that we should prompt for input again.
- build-in commands are like CD and Exit. If you want to change directory, you need to use the function chdir(), the thing is, the current directory is a property of a process. So if you wrote a program called cd that changed directory, it would just change its own current directory, and then terminate. Its parent process's current directory would be unchanged. Same thing with exit.
- A forward declaration is when you declare (but don’t define) something, so that you can use its name before you define it.

# Problem Set:
## First Set
1. **Q: How is a system call different from a function call?**
	- A System Call provides abstractions to user program and managing computer’s hardware resources; its functionality is generally defined by POSIX for UNIX/ or Windows Standards. 
	- A system call involves trapping into Kernel, which executes an interuption to Kernel. A Function Call generally refers to a call to a piece of code in the user space, thought, there might be system calls involved in a function call in specific cases such as fopen().
	- System call involves a mode switch from user to kernel. 
	- Functionality: system calls are set by OS developer, function call can be arbitarily written by the programmer
<!--truncate-->
2. **Q: How is system call processing different from interrupt servicing?**
	- In OS level: An interrupt is triggered by an asynchronous external event. At interrupt, the interrupt service routine pointed to by the interrupt service vector is executed. In a modern OS, the interrupt service routines and vectors are managed by the kernel. A system call (or fault or trap) is triggered synchronously by executing code. A process continues to execute its code stream in a system call, but not in an interrupt. 
	- In gerenal though, system calls involve the user-to-kernel switch not relevant for interrupts. Interrupt processing takes place even in micro-controllers that do not have an OS.
3. **Q: What is the significance of Mode Switching in system call processing? That is, can we have a system call without the mode switch?**
	- Mode Switching is switching from user to kernel mode to process the system call (TRAP system call). This reminds me of the difference between monolithic kernel and a microkernel mentioned in the Chapter 1 of the Textbook. Linux is a monolithic OS, there is no mode switching necessary since system calss and interrupts are handled in Kernel. The problem with no mode switching is that there is no information hiding, every procedure is visible to other procedures. The significance of Mode Switching comes in handy when security is needed, since a code bug in user-space will not break down the whole OS.
	- Mode switching is also essential since a system call is to run procedures that have higher **privileges**. i.e. Context switches (occurs when a computer's CPU switches from one process or thread to a different process or thread), context switches need scheduler to access the process table and next process's memory map, both of which are not accessible to old process and therefore require privilege elevation.
4. **Q: Consider a uni-programming system. The user wants to run job A and job B. A has the following characteristics: runs for 10 ms waits for 990ms and the pattern continues for many iterations. Job B runs for 10 ms and waits for 400ms and the pattern continues for many  iterations. If you are measuring CPU utilization values over half second intervals, what are the possible values you could get?**
<div style="border: solid 1px grey; padding-left:10px; margin:8px">half second interval = 0.5 s = 500 ms 
Job A runs 10 ms and waits 990 ms, total uses 1000ms
Job B runs 100 ms and waits 400 ms, total uses 500ms
For 500ms, we can only pick either Job A to run or Job B to run.
if pick A, 10/500=2\% CPU usage
if Pick B, 100/500=20\% CPU usage
if Pick A at the interval of A waiting, then 0/500=0%
</div>
5. **Q: In the system given in 4, we enabled multi-programming. There is a single processor in the system and just jobs A and B. What are the time measured utilization values over half second intervals in this case?**
Run Job A first and Run Job B while A goes into waiting mode. 10+100/500=22%. However, it depends on how you schedule them and where you are taking the 500ms interval, 10/500 is possible, 100/500 is possible, and 0/500 is possible too.
6. **Q: Why is memory protection an imporant concern with multi-programming**
	- Multiple programs in the memory should be protected from one another. Otherwise, o ensure correct execution we need to save the memory contents, which would make multi-programming impractical
7. **Q: We have a computer with 512 MB of RAM. We have 3 applications. Application A needs 300 MB of RAM, B needs 200 MB, and C needs 300 MB. How can a virtual memory system load all three programs and still provide good performance? What characteristics of the applications are exploited by the virtual memory system?**
	- 
8. **Q: Can a micro-kernel OS be more reliable than a monolithic OS? Provide Reasons why micro-kernel could provide a more reliable OS. Could micro-kernel make an OS less reliable too?**
	- In Monolithic OS, the whoole OS runs as a single program in kernel mode. In Micro-kernel, there is a seperation between kernel and user-space. In this sense, micro-kernel OS is more reliable since each bug only crashes a component not the whole OS. For instance, device drivers are installed in user-space of micro-kernel OS, failure in drivers may cause OS to crash, which is the reason why militaries avoid monolithic OS. However, Micro-kernel is only a concept in system design, reliability depends on implementation. For example, Micro-kernel is relatively slower than Monolithic, which may not be the best choice in devices that are uni-functional but requires high processing speed.
	- Micro-kernel is very small, so it can be reliably constructed
	- System doesn't crash unless micro-kernel crashes. The services can crash and restart without affecting the system state as far is up or down.
	- microkernel is not reliable sometimes because we need complex and evolving messaging interfaces.
9. **Q: Consider a webserver. Each incoming request is processed as follows: input side processing (done on all incoming requests) - 10ms, disk access - 900ms, cache access - 100ms. The input side processing determines whether a request can be served by the cache or disk access is required assume that the web server has a single disk that serves the requests one after the other. The cache will hold popular requests after warm up. If the web server uses a single thread or process, what is the best and worst request rates achievable by the server?**

## Second Set
1. **What are the two main functions of an operating system?**
	- utilize hardware and provide software interface
	- or in another term, 1-> provide users with an extended machine. 2 -> must manage I/O devices and other system resources.
3. **What is the difference between timesharing and multiprogramming systems?**
	- Time Sharing System: multiple users can access and perform computations on a computing system simultaneously using their own terminals. Multiprogramming systems allow a user to run multiple programs simultaneously. All timesharing systems are multiprogramming systems but not all multiprogramming systems are timesharing systems since a multiprogramming system may run on a PC with only one user.
9. **There are several design goals in building an operating system, for example, resource utilization, timeliness, robustness, and so on. Give an example of two design goals that may contradict one another.**
10. **What is the difference between kernel and user mode? Explain how having two distinct modes aids in designing an operating system.**
12. **Which of the following instructions should be allowed only in kernel mode?
(a) Disable all interrupts.
(b) Read the time-of-day clock. (c) Set the time-of-day clock. (d) Change the memory map.**
13. **Consider a system that has two CPUs, each CPU having two threads (hyperthreading). Suppose three programs, P0, P1, and P2, are started with run times of 5, 10 and 20 msec, respectively. How long will it take to complete the execution of these programs? Assume that all three programs are 100% CPU bound, do not block during execution, and do not change CPUs once assigned.**
P171:
2. **Suppose that you were to design an advanced computer architecture that did process switching in hardware, instead of having interrupts. What information would the CPU need? Describe how the hardware process switching might work.**
 
This is related to PCB, which has all current processes information

4.**When an interrupt or a system call transfers control to the operating system, a kernel stack area separate from the stack of the interrupted process is generally used. Why?**
Having a separate area reduces in the need to check that user programs don’t overwrite data onto the kernel
stack and vice versa.


---
My Notes
---

- File Descriptor:
fd[0,1,2] stands for what?
 fd[0] => stdinput = STDIN_FILENO 
fd[1] => stdoutput = STDOUT_FILENO
fd[3]=> stderr = STDERR_FILENO
int pipeEnd[2]; pipe(pipeEnd) stands for what?
		answer: pipe essencially assigns a len 2 array of int to file descriptor table.
define dup(), dup2(), and close(), and why close() after dup()?
Scheduler vs Dispatcher:
What is the difference between scheduler and dispatcher?
answer: Normally there are 3 types of schedulers are available in operating systems.
1. Long term scheduler: long term scheduler selects the processes which are in the disk(input queue)and load them in to the main memory.
2. Mid term scheduler: The medium term scheduler selects the jobs which are waiting for the I/O devices and remove them from the contest for the cpu and place them in the appropriate device queue
3. Short term scheduler: The short term scheduler selects the processes in the main memory which are waiting for cpu and allocate them to the cpu for execution.
The dispatcher sets up what user registers and memory mapping (everything needed for the CPU), and takes responsibility of transferring the CPU to the process (context switch, and mode switching)
