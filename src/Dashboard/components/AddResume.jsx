import { LoaderCircle, PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import { uid } from 'uid';
import globalApi from '../../../service/globalApi';
import { data } from 'autoprefixer';
import { useUser } from '@clerk/clerk-react';

const AddResume = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [resumeTitle, setResumeTitle] = useState();
    const { user } = useUser();
    const [isLoading, setIsLoading] = useState(false);


    const onCreate = () => {
        setIsLoading(true);
        const resumeId = uid(16);
        setIsDialogOpen(false);
        setResumeTitle('');

        const data = {
            data: {
                title: resumeTitle,
                resumeId: resumeId,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                userName: user?.fullName
            }
        }

        globalApi.CreateNewResume(data).then(res => {
            console.log("response", res);
            if (res) {
                setIsLoading(false);
            }
        }, (error) => {
            console.log("RESPONSE ERROR", error);
            setIsLoading(false);
        })
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <div className='w-[12vw] h-[28vh] cursor-pointer border mt-10 flex items-center justify-center bg-secondary rounded-lg  transition-transform duration-300 ease-in-out transform hover:scale-105 group shadow-lg hover:shadow-xl' >
                        <PlusSquare className='transition-transform duration-300 ease-in-out transform group-hover:scale-110' size={30} />
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Resume</DialogTitle>
                        <DialogDescription>
                            {/* Add a title for your resume that highlights your expertise and aspirations. */}
                            Add a title for your new resume.
                            <Input onChange={(e) => setResumeTitle(e.target.value.trim())} className="my-3" placeholder="Ex. Full Stack Resume" />
                        </DialogDescription>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant="destructive" onClick={() => setIsDialogOpen(false)}>
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button disabled={!resumeTitle || isLoading} onClick={() => onCreate()}>
                                {isLoading ? <LoaderCircle className='animate-spin' /> : "Create Resume"}
                            </Button>

                        </DialogFooter>
                    </DialogHeader>
                </DialogContent>
            </Dialog>




        </div>
    )
}

export default AddResume
